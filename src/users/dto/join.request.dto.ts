import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'jpp9012200@gmail.com',
    description: '이메일',
  })
  public email: string;

  @ApiProperty({
    example: '정세바리',
    description: '닉네임',
  })
  public nickname: string;

  @ApiProperty({
    example: 'jslack',
    description: '비밀번호',
  })
  public password: string;
}
