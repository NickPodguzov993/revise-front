import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Group, Stack } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { reviseObjectsMock } from "@/entities/revise-object";
import { OverviewTable } from "@/widgets/overview-table";

import styles from "./overview.module.css";

export function OverviewPage() {
  const [date, setDate] = useState(new Date());

  return (
    <Stack className={styles.container} gap="lg">
      <Group justify="space-between">
        <MonthPickerInput
          className={styles.datePicker}
          size="md"
          label="Месяц сверки"
          value={date}
          onChange={(date) => setDate(date as Date)}
        />
        <Button variant="light" size="md" component={Link} to="/systems">
          Платежные системы
        </Button>
      </Group>
      <OverviewTable data={reviseObjectsMock} />
      <Group justify="end">
        <Button
          size="md"
          component={Link}
          to={`/summary/${date.getFullYear()}-${date.getMonth() + 1}`}
        >
          Рассчитать
        </Button>
      </Group>
    </Stack>
  );
}
