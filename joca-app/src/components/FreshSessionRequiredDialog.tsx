"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { formatFreshAgeLabel } from "@/lib/auth-constants";

type FreshSessionRequiredDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * Shown when a sensitive action needs a fresher login.
 * freshAge does not end the session — it only blocks sensitive ops until re-auth.
 */
export function FreshSessionRequiredDialog({
  open,
  onOpenChange,
}: FreshSessionRequiredDialogProps) {
  const router = useRouter();

  const handleSignInAgain = async () => {
    onOpenChange(false);
    await signOut();
    router.push("/login");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign in again to continue</DialogTitle>
          <DialogDescription>
            For security, password changes and account deletion require a login
            from the last {formatFreshAgeLabel()}. Your session is still active
            for browsing. Sign in again to unlock these actions.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Not now
          </Button>
          <Button onClick={handleSignInAgain}>Sign in again</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
