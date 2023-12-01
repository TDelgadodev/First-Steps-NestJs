import { TaskStatus } from "../task.entity";
import { IsString, IsNotEmpty, MinLength, MaxLength, IsOptional, IsIn } from "class-validator"

export class CreateTaskDto {   
    @IsNotEmpty()
    @IsString()
    @MinLength(3) 
    @MaxLength(16)
    title: string

    @IsNotEmpty()
    @IsString()
    description: string
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    @MinLength(6) 
    @MaxLength(120)
    description?: string
 
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
    status?: TaskStatus
}