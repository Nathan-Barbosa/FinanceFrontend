import type React from "react";

type TransactionsDialogProps = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { TransactionsDialogProps };
