"use client";

import { IconExclamationmarkTriangle } from 'symbols-react';
import type { UiWallet } from '@wallet-standard/react';
import { useState } from 'react';

import { ErrorDialog } from './ErrorDialog';
import { WalletMenuItemContent } from './WalletMenuItemContent';
import {
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

type Props = Readonly<{
    error: unknown;
    wallet: UiWallet;
}>;

export function UnconnectableWalletMenuItem({ error, wallet }: Props) {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    
    return (
        <>
            <DropdownMenuItem
                disabled
                onClick={() => setDialogIsOpen(true)}
                className="opacity-50"
            >
                <WalletMenuItemContent wallet={wallet}>
                    <span className="line-through">{wallet.name}</span>
                    <IconExclamationmarkTriangle className="ml-auto h-4 w-4 shrink-0" />
                </WalletMenuItemContent>
            </DropdownMenuItem>

            {dialogIsOpen && (
                <ErrorDialog 
                    error={error} 
                    onClose={() => setDialogIsOpen(false)} 
                    title="Unconnectable wallet" 
                />
            )}
        </>
    );
}