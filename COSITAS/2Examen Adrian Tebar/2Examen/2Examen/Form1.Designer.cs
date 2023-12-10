namespace _2Examen
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.formularioInicialToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.configuracionDeSalaToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.venderEntradasToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.ImageScalingSize = new System.Drawing.Size(24, 24);
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.formularioInicialToolStripMenuItem,
            this.configuracionDeSalaToolStripMenuItem,
            this.venderEntradasToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(800, 33);
            this.menuStrip1.TabIndex = 0;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // formularioInicialToolStripMenuItem
            // 
            this.formularioInicialToolStripMenuItem.Name = "formularioInicialToolStripMenuItem";
            this.formularioInicialToolStripMenuItem.Size = new System.Drawing.Size(136, 29);
            this.formularioInicialToolStripMenuItem.Text = "Crear ficheros";
            this.formularioInicialToolStripMenuItem.Click += new System.EventHandler(this.formularioInicialToolStripMenuItem_Click);
            // 
            // configuracionDeSalaToolStripMenuItem
            // 
            this.configuracionDeSalaToolStripMenuItem.Name = "configuracionDeSalaToolStripMenuItem";
            this.configuracionDeSalaToolStripMenuItem.Size = new System.Drawing.Size(196, 29);
            this.configuracionDeSalaToolStripMenuItem.Text = "configuracion de sala";
            this.configuracionDeSalaToolStripMenuItem.Click += new System.EventHandler(this.configuracionDeSalaToolStripMenuItem_Click);
            // 
            // venderEntradasToolStripMenuItem
            // 
            this.venderEntradasToolStripMenuItem.Name = "venderEntradasToolStripMenuItem";
            this.venderEntradasToolStripMenuItem.Size = new System.Drawing.Size(155, 29);
            this.venderEntradasToolStripMenuItem.Text = "vender entradas";
            this.venderEntradasToolStripMenuItem.Click += new System.EventHandler(this.venderEntradasToolStripMenuItem_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = global::_2Examen.Properties.Resources.cine;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private MenuStrip menuStrip1;
        private ToolStripMenuItem formularioInicialToolStripMenuItem;
        private ToolStripMenuItem configuracionDeSalaToolStripMenuItem;
        private ToolStripMenuItem venderEntradasToolStripMenuItem;
    }
}