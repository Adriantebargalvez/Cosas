namespace WindowsFormsApp1
{
    partial class Empresa
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.MenuStripEmpresa = new System.Windows.Forms.MenuStrip();
            this.dATOSPERSONALESToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.nOMINAToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.MenuStripEmpresa.SuspendLayout();
            this.SuspendLayout();
            // 
            // MenuStripEmpresa
            // 
            this.MenuStripEmpresa.ImageScalingSize = new System.Drawing.Size(24, 24);
            this.MenuStripEmpresa.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.dATOSPERSONALESToolStripMenuItem,
            this.nOMINAToolStripMenuItem});
            this.MenuStripEmpresa.Location = new System.Drawing.Point(0, 0);
            this.MenuStripEmpresa.Name = "MenuStripEmpresa";
            this.MenuStripEmpresa.Padding = new System.Windows.Forms.Padding(4, 1, 0, 1);
            this.MenuStripEmpresa.Size = new System.Drawing.Size(533, 24);
            this.MenuStripEmpresa.TabIndex = 1;
            this.MenuStripEmpresa.Text = "menuStrip2";
            // 
            // dATOSPERSONALESToolStripMenuItem
            // 
            this.dATOSPERSONALESToolStripMenuItem.Name = "dATOSPERSONALESToolStripMenuItem";
            this.dATOSPERSONALESToolStripMenuItem.Size = new System.Drawing.Size(127, 22);
            this.dATOSPERSONALESToolStripMenuItem.Text = "DATOS PERSONALES";
            this.dATOSPERSONALESToolStripMenuItem.Click += new System.EventHandler(this.dATOSPERSONALESToolStripMenuItem_Click);
            // 
            // nOMINAToolStripMenuItem
            // 
            this.nOMINAToolStripMenuItem.Name = "nOMINAToolStripMenuItem";
            this.nOMINAToolStripMenuItem.Size = new System.Drawing.Size(68, 22);
            this.nOMINAToolStripMenuItem.Text = "NOMINA";
            this.nOMINAToolStripMenuItem.Click += new System.EventHandler(this.nOMINAToolStripMenuItem_Click);
            // 
            // Empresa
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(533, 521);
            this.Controls.Add(this.MenuStripEmpresa);
            this.IsMdiContainer = true;
            this.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.Name = "Empresa";
            this.Text = "Empresa Ficticia";
            this.Load += new System.EventHandler(this.Empresa_Load);
            this.MenuStripEmpresa.ResumeLayout(false);
            this.MenuStripEmpresa.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip MenuStripEmpresa;
        private System.Windows.Forms.ToolStripMenuItem dATOSPERSONALESToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem nOMINAToolStripMenuItem;
    }
}

