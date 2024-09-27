 import { ClerkProvider } from "@clerk/nextjs";
import { arSA } from "@clerk/localizations";
export const ClerkProviderClient = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider localization={arSA}>
            {children}
        </ClerkProvider>
    )
}