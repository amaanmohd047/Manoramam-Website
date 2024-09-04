import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { raleway } from "../_components/ui/fonts";

const ConfirmActionModal = ({
  children,
  handleAction,
  resourceTitle,
  resourceDescription,
  className = "",
}) => {
  return (
    <div className={className + ` ${raleway.className}`}>
      <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{resourceTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {resourceDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-primary-800 bg-primary-100 hover:bg-primary-200 hover:text-primary-900 transition-colors border-primary-200 border rounded-none">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleAction}
              className="text-primary-100 bg-accent-500 hover:bg-accent-700 transition-colors border-accent-600 border rounded-none"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ConfirmActionModal;
