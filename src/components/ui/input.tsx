import * as React from 'react'

import { cn } from '@/lib/utils'
import { Label } from './label'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon: React.ElementType
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, icon: Icon, ...props }, ref) => {
    return (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="email" className="uppercase text-gray-300">
          {label}
        </Label>
        <div className="relative flex items-center">
          <div className="absolute left-0 text-gray-500">
            <Icon className="w-5 h-5" />
          </div>
          <input
            type={type}
            className={cn(
              'flex h-10 w-full border-b-[1px] border-gray-100 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 pl-8',
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
