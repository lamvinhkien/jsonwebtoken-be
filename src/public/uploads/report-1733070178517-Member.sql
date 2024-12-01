USE Karma
GO

--DROP TABLE Member
CREATE TABLE Member(
	MemberId VARCHAR(32) PRIMARY KEY,
	Email VARCHAR(64) NOT NULL,
	Password VARCHAR(128) NOT NULL,
	Name NVARCHAR(64) NOT NULL,
	GivenName NVARCHAR(16) NOT NULL,
	SurName NVARCHAR(32),
	Role VARCHAR(8) DEFAULT 'Customer',
	CreateDate DATETIME NOT NULL DEFAULT GETDATE()
);

--DROP PROC AddMember
CREATE PROC AddMember(
	@MemberId VARCHAR(32),
	@Email VARCHAR(64),
	@Password VARCHAR(128),
	@Name NVARCHAR(64),
	@GivenName NVARCHAR(16),
	@SurName NVARCHAR(32),
	@Role VARCHAR(8)
)
AS
	IF NOT EXISTS(SELECT * FROM Member WHERE MemberId = @MemberId)
		INSERT INTO Member (MemberId, Email, Password, Name, GivenName, SurName, Role) VALUES
					(@MemberId, @Email, @Password, @Name, @GivenName, @SurName, @Role)
GO