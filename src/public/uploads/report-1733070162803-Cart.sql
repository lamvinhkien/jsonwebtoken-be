USE Karma
GO

--DROP TABLE Cart
CREATE TABLE Cart(
	CartCode VARCHAR(32) NOT NULL,
	ProductId INT NOT NULL,
	Quantity SMALLINT NOT NULL,
	CreateDate DATETIME NOT NULL DEFAULT GETDATE(),
	UpdateDate DATETIME NOT NULL DEFAULT GETDATE()
);
GO

--DROP PROC AddCart
CREATE PROC AddCart(
	@CartCode VARCHAR(32),
	@ProductId INT,
	@Quantity SMALLINT
)
as
	IF EXISTS(SELECT * FROM Cart WHERE CartCode = @CartCode AND ProductId = @ProductId)
			UPDATE Cart SET Quantity += @Quantity WHERE CartCode = @CartCode AND ProductId = @ProductId;
	ELSE 
		INSERT INTO Cart(CartCode, ProductId, Quantity) VALUES (@CartCode, @ProductId, @Quantity);
GO

--DROP PROC DeleteCart
CREATE PROC DeleteCart(
	@ProductId INT
)
as
	DELETE FROM Cart WHERE ProductId = @ProductId
GO


