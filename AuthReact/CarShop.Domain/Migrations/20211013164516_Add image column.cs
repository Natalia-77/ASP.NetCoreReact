using Microsoft.EntityFrameworkCore.Migrations;

namespace CarShop.Domain.Migrations
{
    public partial class Addimagecolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageProfile",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageProfile",
                table: "AspNetUsers");
        }
    }
}
