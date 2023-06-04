import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
// import { Users } from 'src/entities/Users';

// export class JoinRequestDto extends PickType(Users, ['email', 'nickname', 'password'] as const) {}

export class JoinRequestDto {
  @IsEmail()
  @ApiProperty({
    example: 'jpp901220@gmail.com',
    description: '이메일',
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '정센니',
    description: '닉네임',
  })
  public nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'nodejsbook',
    description: '비밀번호',
  })
  public password: string;
}
