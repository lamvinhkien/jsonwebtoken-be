USE Karma
GO

--DROP TABLE Product
CREATE TABLE Product(
	ProductId INT IDENTITY(1, 1) PRIMARY KEY NOT NULL,
	Name NVARCHAR(64) NOT NULL,
	Price DECIMAL(10, 0) NOT NULL,
	ImageURL VARCHAR(128),
	Availability NVARCHAR(16) NOT NULL,
	Description NVARCHAR(MAX),
	DetailDescription NVARCHAR(MAX),
	Specification NVARCHAR(MAX),
	Comments NVARCHAR(MAX),
	Reviews NVARCHAR(MAX),
    CategoryId INT NOT NULL,
    FOREIGN KEY (CategoryId) REFERENCES Category(CategoryId)
)
GO

INSERT INTO Product(Name, Price, ImageURL, Availability, Description, DetailDescription,
					Specification, Comments, Reviews, CategoryId) VALUES
			(N'NIKE PUMA ADIDAS', 239, '/img/product/p8.jpg', N'Sold Out',
			N'LAM VINH KIEN SNEAKER 179 is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.',
			N'<p>LAM VINH KIEN SNEAKER 179 is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapesand sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in
						Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to
						London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an
						officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a
						job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
						showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a
						child’s painting set for her birthday and it was with this that she produced her first significant work, a
						half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly
						named ‘Hangover’ by Beryl’s husband and</p>
					<p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing
						more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and
						the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for
						more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a
						streamlined plan of cooking that is more efficient for one person creating less</p>',
			N'<tr><td><h5>Width</h5></td><td><h5>100</h5></td></tr><tr><td><h5>Height</h5></td><td><h5>200</h5></td></tr>
			<tr><td><h5>Depth</h5></td><td><h5>300</h5></td></tr><tr><td><h5>Weight</h5></td><td><h5>400</h5></td></tr>
			<tr><td><h5>Quality checking</h5></td><td><h5>yes</h5></td></tr><tr><td><h5>Freshness Duration</h5></td><td><h5>100days</h5></td></tr>
			<tr><td><h5>When packeting</h5></td><td><h5>Without touch of leg</h5></td></tr><tr><td><h5>Each Box contains</h5></td><td><h5>HAHA</h5></td></tr>',
			N'<div class="review_item">
					<div class="media">
						<div class="d-flex">
							<img src="/img/product/review-3.png" alt="">
						</div>
						<div class="media-body">
								<h4>Lam Vinh Kien</h4>
								<h5>17th Sep, 2024 at 01:22 pm</h5>
								<a class="reply_btn" href="#">Reply</a>
						</div>
					</div>
						p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo</p>
				</div>
				<div class="review_item reply">
					<div class="media">
						<div class="d-flex">
							<img src="/img/product/review-2.png" alt="">
						</div>
						<div class="media-body">
							<h4>Truong Ngoc Cam</h4>
							<h5>17th Jul, 2003 at 17:17 pm</h5>
							<a class="reply_btn" href="#">Reply</a>
						</div>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo</p>
				</div>
				<div class="review_item">
					<div class="media">
						<div class="d-flex">
							<img src="/img/product/review-2.png" alt="">
						</div>
						<div class="media-body">
							<h4>Blake Ruiz</h4>
							<h5>12th Feb, 2018 at 05:56 pm</h5>
							<a class="reply_btn" href="#">Reply</a>
						</div>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo</p>
				</div>',
			N'<div class="review_item">
				<div class="media">
					<div class="d-flex">
						<img src="/img/product/review-1.png" alt="">
					</div>
					<div class="media-body">
						<h4>Blake Ruiz</h4>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
					</div>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo</p>
			</div>
			<div class="review_item">
				<div class="media">
					<div class="d-flex">
						<img src="/img/product/review-2.png" alt="">
					</div>
					<div class="media-body">
						<h4>Blake Ruiz</h4>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
					</div>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo</p>
			</div>
			<div class="review_item">
				<div class="media">
					<div class="d-flex">
						<img src="/img/product/review-1.png" alt="">
					</div>
					<div class="media-body">
						<h4>Blake Ruiz</h4>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
					</div>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo</p>
			</div>', 3)
GO



-- DROP TABLE Category
CREATE TABLE Category(
	CategoryId INT IDENTITY(1, 1) PRIMARY KEY NOT NULL,
	Name NVARCHAR(32) NOT NULL,
	ImageURL VARCHAR(64),
	BackgroundColor VARCHAR(16),
	HoverBackgroundColor VARCHAR(16) DEFAULT '#f2f3f4'
)
GO

INSERT INTO Category (Name, ImageURL, BackgroundColor, HoverBackgroundColor) VALUES
					(N'Sneaker For Sports', '/img/category/c1.jpg', '#4e73df', '#f2f3f4'),
					(N'Runner', '/img/category/c2.jpg','#1cc88a', '#f2f3f4'),
					(N'Slide', '/img/category/c3.jpg', '#ff6868', '#f2f3f4'),
					(N'Shoes for kids', '/img/category/c4.jpg', '#f6c23e', '#f2f3f4'),
					(N'Gym', '/img/category/c5.jpg', '#b8efeb', '#f2f3f4'),
					(N'LifeStyle', '/img/category/c1.jpg', '#f7ebb9', '#f2f3f4')
GO



-- DROP TABLE Brand
CREATE TABLE Brand(
	BrandId INT IDENTITY(1, 1) PRIMARY KEY NOT NULL,
	ImageURL VARCHAR(64)
)
GO

INSERT INTO Brand (ImageURL) VALUES
				('/img/brand/1.png'),
				('/img/brand/2.png'),
				('/img/brand/3.png'),
				('/img/brand/4.png'),
				('/img/brand/5.png')
GO



-- DROP TABLE Banner
CREATE TABLE Banner(
	BannerId INT IDENTITY(1, 1) PRIMARY KEY NOT NULL,
	Name NVARCHAR(32) NOT NULL,
	Description NVARCHAR(MAX) NOT NULL,
	ImageURL VARCHAR(64)
)
GO

INSERT INTO Banner (Name, Description, ImageURL) VALUES
		(N'VINH KIEN', N'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.', '/img/banner/banner-img.png'),
		(N'NGOC CAM', N'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.', '/img/banner/banner-img.png')
GO



-- DROP TABLE Blog
CREATE TABLE Blog(
	BlogId INT IDENTITY(1, 1) PRIMARY KEY NOT NULL,
	ImageURL VARCHAR(64),
	BlogName NVARCHAR(128) NOT NULL,
	Author NVARCHAR(32) NOT NULL,
	DatePost NVARCHAR (32) DEFAULT GETDATE(),
	Views NVARCHAR(32),
	Comments INT,
	Tag NVARCHAR(MAX),
	Description NVARCHAR(MAX),
	DetailDescription NVARCHAR(MAX),
	DetailComments NVARCHAR(MAX)
)
GO

INSERT INTO Blog (ImageURL, BlogName, Author, DatePost, Views, Comments,
					Tag, Description, DetailDescription, DetailComments) VALUES
				('/img/blog/main-blog/m-blog-1.jpg', N'Astronomy Binoculars A Great Alternative', N'Lam Vinh Kien', N'19 Sep, 2020', N'1,912', 1,
				N'<a class="active" href="#">Technology,</a>
                  <a class="active" href="#">Fashion,</a>
                  <a class="active" href="#">Food,</a>
                  <a class="active" href="#">Technology</a>',
				N'Telescopes 101 boot camps have its supporters and its detractors. Some people do not
                  understand why you should have to spend money on boot camp when you can get
                  the MCSE study materials yourself at a fraction.',
				N'<p class="excert">
                        Telescopes 101 boot camps have its supporters and its detractors. Some people do not understand
                        why you should have to spend money on boot camp when you can get the MCSE study
                        materials yourself at a fraction.
                  </p>
                   <p>
                        The Night Sky Boot camps have its supporters and its detractors. Some people do not understand why
                        you should have to spend money on boot camp when you can get the MCSE study materials
                        yourself at a fraction of the camp price. However, who has the willpower to actually
                        sit through a self-imposed MCSE training. who has the willpower to actually sit through
                        a self-imposed
				   </p>
                    <p>
                       Telescopes 101 Boot camps have its supporters and its detractors. Some people do not understand why
                        you should have to spend money on boot camp when you can get the MCSE study materials
                        yourself at a fraction of the camp price. However, who has the willpower to actually
                        sit through a self-imposed MCSE training. who has the willpower to actually sit through
                        a self-imposed
                    </p>',
				N'<div class="comment-list">
                        <div class="single-comment justify-content-between d-flex">
                            <div class="user justify-content-between d-flex">
                                <div class="thumb">
                                    <img src="/img/blog/c5.jpg" alt="">
                                </div>
                                <div class="desc">
                                    <h5><a href="#">Lam Vinh Kien</a></h5>
                                    <p class="date">December 4, 2018 at 3:12 pm </p>
                                    <p class="comment">
                                        Never say goodbye till the end comes!
                                    </p>
                                </div>
                            </div>
                            <div class="reply-btn">
                                <a href="" class="btn-reply text-uppercase">reply</a>
                            </div>
                        </div>
                    </div>
                    <div class="comment-list left-padding">
                        <div class="single-comment justify-content-between d-flex">
                            <div class="user justify-content-between d-flex">
                                <div class="thumb">
                                    <img src="/img/blog/c3.jpg" alt="">
                                </div>
                                <div class="desc">
                                    <h5><a href="#">Truong Ngoc Cam</a></h5>
                                    <p class="date">December 4, 2018 at 3:12 pm </p>
                                    <p class="comment">
                                        Never say goodbye till the end comes!
                                    </p>
                                </div>
                            </div>
                            <div class="reply-btn">
                                <a href="" class="btn-reply text-uppercase">reply</a>
                            </div>
                        </div>
                    </div>
                    <div class="comment-list left-padding">
                        <div class="single-comment justify-content-between d-flex">
                            <div class="user justify-content-between d-flex">
                                <div class="thumb">
                                    <img src="/img/blog/c3.jpg" alt="">
                                </div>
                                <div class="desc">
                                    <h5><a href="#">Annie Stephens</a></h5>
                                    <p class="date">December 4, 2018 at 3:12 pm </p>
                                    <p class="comment">
                                        Never say goodbye till the end comes!
                                    </p>
                                </div>
                            </div>
                            <div class="reply-btn">
                                <a href="" class="btn-reply text-uppercase">reply</a>
                            </div>
                        </div>
                    </div>')
GO


-- METHOD GET CategoryName by ProductId
SELECT Category.Name FROM Product JOIN Category ON Product.CategoryId = Category.CategoryId WHERE Product.ProductId = 5

-- METHOD GET Invoice and Product
SELECT InvoiceDetail.InvoiceId, InvoiceDetail.ProductId, InvoiceDetail.Quantity, InvoiceDetail.Price AS InvoicePrice, Product.Name, Product.Price AS ProductPrice, Product.ImageURL FROM  InvoiceDetail JOIN Product ON InvoiceDetail.ProductId = Product.ProductId WHERE  InvoiceDetail.InvoiceId = 'b15f28e7170847ba8303594d0fbde4b9';

-- METHOD DELETE Invoice
BEGIN TRANSACTION;

DELETE FROM InvoiceDetail
WHERE InvoiceId = @InvoiceId;

DELETE FROM Invoice
WHERE InvoiceId = @InvoiceId;

COMMIT TRANSACTION;