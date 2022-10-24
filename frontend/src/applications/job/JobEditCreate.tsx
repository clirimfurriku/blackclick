import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { Card, Dialog, DialogTitle } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import useClient from "../../hooks/useClient";
import { Task } from "../../apiClient/data-contracts";

const schema = yup.object().shape({
  query: yup.string().min(3).required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
});

const defaultValues = {
  query: "",
  start_time: Date(),
  end_time: Date(),
};

interface FormData {
  query: string;
  start_time: string;
  end_time: string;
}

interface JobCreateProps {
  onClose: () => void;
  open: boolean;
  job?: Task;
  campaign: number;
}

const JobEditCreate = (props: JobCreateProps) => {
  const { onClose, open, job, campaign } = props;
  const client = useClient();

  const handleClose = () => {
    onClose();
  };

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  if (job != undefined) {
    setValue("query", job.query);
    setValue("start_time", job.start_time);
    setValue("end_time", job.end_time);
  }
  const onSubmit = (data: FormData) => {
    if (job != undefined) {
      client
        ?.jobsTasksUpdate(job.id, {
          query: data.query,
          start_time: data.start_time,
          end_time: data.end_time,
          campaign: campaign,
        })
        .then(() => handleClose())
        .catch((resp) => {
          setError("query", {
            type: "manual",
            message: resp ? resp.response.data.detail : "Error updating Job",
          });
        });
    } else
      client
        ?.jobsTasksCreate({
          query: data.query,
          start_time: data.start_time,
          end_time: data.end_time,
          campaign: campaign,
        })
        .then(() => handleClose())
        .catch((resp) => {
          setError("query", {
            type: "manual",
            message: resp ? resp.response.data.detail : "Error creating Job",
          });
        });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Create new job.</DialogTitle>
      <Card>
        <CardContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="query"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    autoFocus
                    label={"Name"}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.query)}
                    placeholder="Visit website"
                  />
                )}
              />
              {errors.query && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.query.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="start_time"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <DateTimePicker
                    autoFocus
                    renderInput={(props: any) => <TextField {...props} />}
                    label={"Start Date"}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.start_time && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.start_time.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="end_time"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <DateTimePicker
                    autoFocus
                    renderInput={(props: any) => <TextField {...props} />}
                    label={"End Date"}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.end_time && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.end_time.message}
                </FormHelperText>
              )}
            </FormControl>
            <Box
              sx={{
                mb: 4,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            ></Box>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ mb: 7 }}
            >
              Create Job
            </Button>
          </form>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default JobEditCreate;
